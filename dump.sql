--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Ubuntu 16.0-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.0 (Ubuntu 16.0-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: bets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bets (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "homeTeamScore" integer NOT NULL,
    "awayTeamScore" integer NOT NULL,
    "amountBet" integer NOT NULL,
    "gameId" integer NOT NULL,
    "participantId" integer NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    "amountWon" integer DEFAULT 0 NOT NULL
);


--
-- Name: bets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bets_id_seq OWNED BY public.bets.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "homeTeamName" text NOT NULL,
    "awayTeamName" text NOT NULL,
    "homeTeamScore" integer DEFAULT 0 NOT NULL,
    "awayTeamScore" integer DEFAULT 0 NOT NULL,
    "isFinished" boolean DEFAULT false NOT NULL
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: participants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.participants (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    name text NOT NULL,
    balance integer NOT NULL
);


--
-- Name: participants_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.participants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: participants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.participants_id_seq OWNED BY public.participants.id;


--
-- Name: bets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets ALTER COLUMN id SET DEFAULT nextval('public.bets_id_seq'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: participants id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.participants ALTER COLUMN id SET DEFAULT nextval('public.participants_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('19904751-6d2b-4998-b3b5-54e8fb58424a', '04ddb4715864cea16b457f786c1710ed775692e01fb71b309f5ef5e34aa716b2', '2024-01-09 21:21:38.025159-03', '20240110002137_database_init', NULL, NULL, '2024-01-09 21:21:37.968662-03', 1);
INSERT INTO public._prisma_migrations VALUES ('a0b24596-565a-4785-a613-412652ebbe57', '56f27c44caadc5c3f053dea1cbfe66fcbca718ba30933641d5d2c0a76bf37757', '2024-01-09 22:05:56.494486-03', '20240110010556_balance_int', NULL, NULL, '2024-01-09 22:05:56.463139-03', 1);
INSERT INTO public._prisma_migrations VALUES ('7b403872-a86a-4f1d-b3dd-a78e77a41d3f', '50bde92a93535bb98004c706304d71105d80e2b5527db5e4cd7d9b32fce55b48', '2024-01-10 00:56:47.562954-03', '20240110035647_games_default_home_team_score_away_team_score_is_finished', NULL, NULL, '2024-01-10 00:56:47.552457-03', 1);
INSERT INTO public._prisma_migrations VALUES ('0c9f1de5-8650-466b-9c69-209359e482c6', 'a306370230a566be79af42361dc75a8f37803999bb0221369ee5dd0e5ca67f6f', '2024-01-10 11:32:00.347184-03', '20240110143200_bets_defaults_changes', NULL, NULL, '2024-01-10 11:32:00.337164-03', 1);
INSERT INTO public._prisma_migrations VALUES ('523feb5b-e50f-4904-a7f4-28540635050e', 'ea28a0c800f3e4f95d23ad26c59ccbb6ba69f809ba8be9411c4ba90edb139560', '2024-01-10 21:22:40.338496-03', '20240111002240_amount_bet_int', NULL, NULL, '2024-01-10 21:22:40.312465-03', 1);


--
-- Data for Name: bets; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (1, '2024-01-10 11:40:04.273', '2024-01-10 11:40:04.273', 'Bahia', 'Vitoria', 0, 0, false);


--
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.participants VALUES (1, '2024-01-10 01:06:59.18', '2024-01-10 01:06:59.18', 'Theo', 1000);
INSERT INTO public.participants VALUES (2, '2024-01-10 01:53:01.167', '2024-01-10 01:53:01.167', 'João', 1000);
INSERT INTO public.participants VALUES (3, '2024-01-10 02:39:12.188', '2024-01-10 02:39:12.188', 'Paulo', 5000);
INSERT INTO public.participants VALUES (4, '2024-01-10 03:23:44.534', '2024-01-10 03:23:44.534', 'Julio', 2000);
INSERT INTO public.participants VALUES (5, '2024-01-10 05:09:12.746', '2024-01-10 05:09:12.746', 'Valter', 3500);


--
-- Name: bets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.bets_id_seq', 1, false);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 1, true);


--
-- Name: participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.participants_id_seq', 5, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: bets bets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_pkey PRIMARY KEY (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: participants participants_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.participants
    ADD CONSTRAINT participants_pkey PRIMARY KEY (id);


--
-- Name: participants_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX participants_name_key ON public.participants USING btree (name);


--
-- PostgreSQL database dump complete
--

