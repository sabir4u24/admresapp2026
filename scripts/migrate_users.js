// migrate_users.js
require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting user migration from auth_user to NextAuth User table...");

  // Fetch all existing users from Django's auth_user table
  const authUsers = await prisma.auth_user.findMany({
    where: {
      is_active: true
    }
  });

  console.log(`Found ${authUsers.length} active users in Django's auth_user table.`);

  let createdCount = 0;

  for (const user of authUsers) {
    // Check if user already exists in NextAuth User table
    const email = user.email || user.username + "@example.com";
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          name: `${user.first_name} ${user.last_name}`.trim() || user.username,
          email: email,
          role: user.is_superuser ? "ADMIN" : "TEACHER",
          // Leaving password empty. The system will prompt them to set one.
        }
      });
      createdCount++;
    }
  }

  console.log(`Migration complete! Successfully migrated ${createdCount} users to the new system.`);
}

main()
  .catch((e) => {
    console.error("Error during migration:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
