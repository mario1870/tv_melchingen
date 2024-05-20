CREATE TABLE IF NOT EXISTS "teams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"teamname" varchar NOT NULL,
	"hostName" varchar NOT NULL,
	"hostEmail" varchar NOT NULL,
	"gender" varchar NOT NULL,
	"paymentSuccessful" boolean DEFAULT false NOT NULL,
	"registrationSuccessful" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
