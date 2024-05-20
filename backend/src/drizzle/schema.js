import {
    pgTable,
    text,
    integer,
    timestamp,
    uuid,
    varchar,
    pgEnum,
    boolean,
  } from "drizzle-orm/pg-core";

  export const teams = pgTable("teams", {
    id: uuid("id").defaultRandom().primaryKey(),
    teamname: varchar("teamname").notNull(),
    hostName: varchar("hostName").notNull(),
    hostEmail: varchar("hostEmail").notNull(),
    gender: varchar("gender").notNull(),
    paymentSuccessful: boolean("paymentSuccessful").notNull().default(false),
    registrationSuccessful: boolean("registrationSuccessful")
      .notNull()
      .default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  });
  