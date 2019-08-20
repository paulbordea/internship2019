USE [cinema]
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 20-Aug-19 11:43:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[ID] [int] NOT NULL,
	[MovieId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK__booking] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 20-Aug-19 11:43:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[ID] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Actors] [nvarchar](max) NULL,
 CONSTRAINT [PK_movie] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MovieSchedule]    Script Date: 20-Aug-19 11:43:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MovieSchedule](
	[ID] [int] NOT NULL,
	[MovieId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Hour] [time](0) NOT NULL,
 CONSTRAINT [PK__movieschedule] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seat]    Script Date: 20-Aug-19 11:43:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seat](
	[MovieId] [int] NOT NULL,
	[ID] [int] NOT NULL,
	[SeatNumber] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Hour] [time](7) NOT NULL,
 CONSTRAINT [PK__seat] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 20-Aug-19 11:43:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[IsAdmin] [bit] NOT NULL,
 CONSTRAINT [PK__user] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Movie] ([ID], [Name], [Description], [Actors]) VALUES (1, N'movie 1 testez', N'2017-04-23', NULL)
INSERT [dbo].[Movie] ([ID], [Name], [Description], [Actors]) VALUES (2, N'movie 2 testez', N'2013-04-23', NULL)
INSERT [dbo].[Movie] ([ID], [Name], [Description], [Actors]) VALUES (3, N'movie 3 test', N'interesting description', N'ryan gosling')
INSERT [dbo].[MovieSchedule] ([ID], [MovieId], [Date], [Hour]) VALUES (1, 1, CAST(N'2019-08-14' AS Date), CAST(N'08:24:14' AS Time))
INSERT [dbo].[MovieSchedule] ([ID], [MovieId], [Date], [Hour]) VALUES (2, 1, CAST(N'2019-08-14' AS Date), CAST(N'09:24:14' AS Time))
INSERT [dbo].[MovieSchedule] ([ID], [MovieId], [Date], [Hour]) VALUES (3, 2, CAST(N'2019-08-14' AS Date), CAST(N'10:24:14' AS Time))
INSERT [dbo].[MovieSchedule] ([ID], [MovieId], [Date], [Hour]) VALUES (5, 3, CAST(N'2017-11-01' AS Date), CAST(N'01:02:03' AS Time))
INSERT [dbo].[MovieSchedule] ([ID], [MovieId], [Date], [Hour]) VALUES (6, 3, CAST(N'2017-11-01' AS Date), CAST(N'01:02:03' AS Time))
INSERT [dbo].[User] ([ID], [Name], [Email], [Password], [IsAdmin]) VALUES (1, N'user 1 edit', N'test1@test1.ro', N'test1', 0)
INSERT [dbo].[User] ([ID], [Name], [Email], [Password], [IsAdmin]) VALUES (2, N'testez put', N'test2@test2.ro', N'test2', 0)
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__booking__movie_id] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__booking__movie_id]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__booking__user_id] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__booking__user_id]
GO
ALTER TABLE [dbo].[MovieSchedule]  WITH CHECK ADD  CONSTRAINT [FK__movieschedule__movie_id] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
GO
ALTER TABLE [dbo].[MovieSchedule] CHECK CONSTRAINT [FK__movieschedule__movie_id]
GO
ALTER TABLE [dbo].[Seat]  WITH CHECK ADD  CONSTRAINT [FK__seat__movie_id] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
GO
ALTER TABLE [dbo].[Seat] CHECK CONSTRAINT [FK__seat__movie_id]
GO
