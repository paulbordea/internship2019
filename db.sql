USE [cinema]
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 09-Aug-19 12:34:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[ID] [int] NOT NULL,
	[MovieId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[SeatId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Time] [time](7) NOT NULL,
	[IsAvailable] [bit] NOT NULL,
 CONSTRAINT [PK__bookings] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 09-Aug-19 12:34:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[ID] [int] NOT NULL,
	[Name] [varchar](50) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_movies_movieid] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seat]    Script Date: 09-Aug-19 12:34:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seat](
	[MovieId] [int] NOT NULL,
	[ID] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_seats] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 09-Aug-19 12:34:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] NOT NULL,
	[Name] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[IsAdmin] [bit] NOT NULL,
 CONSTRAINT [PK_users_userid] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Movie] ([ID], [Name], [Date]) VALUES (1, N'movie 1 testez', CAST(N'2017-04-23' AS Date))
INSERT [dbo].[Movie] ([ID], [Name], [Date]) VALUES (2, N'movie 2 testez', CAST(N'2013-04-23' AS Date))
INSERT [dbo].[User] ([ID], [Name], [Email], [Password], [IsAdmin]) VALUES (1, N'user 1 edit', N'test1@test1.ro', N'test1', 0)
INSERT [dbo].[User] ([ID], [Name], [Email], [Password], [IsAdmin]) VALUES (2, N'testez put', N'test2@test2.ro', N'test2', 0)
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__bookings__movie_id] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__bookings__movie_id]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__bookings__seat_id] FOREIGN KEY([SeatId])
REFERENCES [dbo].[Seat] ([ID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__bookings__seat_id]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__bookings__user_id] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__bookings__user_id]
GO
ALTER TABLE [dbo].[Seat]  WITH CHECK ADD  CONSTRAINT [FK__seats__movie_id] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
GO
ALTER TABLE [dbo].[Seat] CHECK CONSTRAINT [FK__seats__movie_id]
GO
ALTER TABLE [dbo].[Seat]  WITH CHECK ADD  CONSTRAINT [FK__seats__user_id] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Seat] CHECK CONSTRAINT [FK__seats__user_id]
GO
