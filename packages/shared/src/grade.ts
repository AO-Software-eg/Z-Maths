import { z } from "zod";
export const gradeSchema = z.object({ studentId: z.string(), score: z.number() });
export type Grade = z.infer<typeof gradeSchema>;
