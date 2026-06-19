import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const communitySubmissionsTable = pgTable("community_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCommunitySubmissionSchema = createInsertSchema(
  communitySubmissionsTable
).omit({ id: true, createdAt: true });

export type InsertCommunitySubmission = z.infer<
  typeof insertCommunitySubmissionSchema
>;
export type CommunitySubmission = typeof communitySubmissionsTable.$inferSelect;
