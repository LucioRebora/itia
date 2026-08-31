-- Vincula cada lead del chatbot con su sesión, para poder topear cuántos leads
-- puede disparar una misma conversación.
ALTER TABLE "contacts" ADD COLUMN IF NOT EXISTS "session_id" text;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "contacts_session_id_idx" ON "contacts" ("session_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "chat_messages_session_id_idx" ON "chat_messages" ("session_id");
