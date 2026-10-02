-- El chatbot puede capturar leads que sólo dejan teléfono.
ALTER TABLE "contacts" ALTER COLUMN "email" DROP NOT NULL;
