import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable(
    "contacts",
    {
        id: serial("id").primaryKey(),
        // Sesión de chat que originó el lead. Null para el formulario de contacto.
        // Permite topear cuántos leads puede disparar una misma sesión.
        sessionId: text("session_id"),
        name: text("name").notNull(),
        email: text("email").notNull(),
        phone: text("phone"),
        company: text("company"),
        message: text("message").notNull(),
        source: text("source").default("contact_form").notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
    },
    (table) => ({
        sessionIdx: index("contacts_session_id_idx").on(table.sessionId),
    }),
);

export const chatMessages = pgTable(
    "chat_messages",
    {
        id: serial("id").primaryKey(),
        sessionId: text("session_id").notNull(),
        role: text("role").notNull(),
        content: text("content").notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
    },
    (table) => ({
        // El historial se lee siempre filtrando por sesión y ordenando por id.
        sessionIdx: index("chat_messages_session_id_idx").on(table.sessionId),
    }),
);
