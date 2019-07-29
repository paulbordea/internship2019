using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace cinema.Models
{
    public partial class CinemaContext : DbContext
    {
        public CinemaContext()
        {
        }

        public CinemaContext(DbContextOptions<CinemaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bookings> Bookings { get; set; }
        public virtual DbSet<Movies> Movies { get; set; }
        public virtual DbSet<Seats> Seats { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.;Database=cinema;Trusted_Connection=True;MultipleActiveResultSets=True;Integrated Security=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Bookings>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__bookings");

                entity.ToTable("bookings");

                entity.Property(e => e.BookingId)
                    .HasColumnName("booking_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BookingDate)
                    .HasColumnName("booking_date")
                    .HasColumnType("date");

                entity.Property(e => e.BookingIsAvailable).HasColumnName("booking_is_available");

                entity.Property(e => e.BookingTime).HasColumnName("booking_time");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.SeatId).HasColumnName("seat_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__bookings__movie_id");

                entity.HasOne(d => d.Seat)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.SeatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__bookings__seat_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__bookings__user_id");
            });

            modelBuilder.Entity<Movies>(entity =>
            {
                entity.HasKey(e => e.MovieId)
                    .HasName("PK_movies_movieid");

                entity.ToTable("movies");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.MovieDate)
                    .HasColumnName("movie_date")
                    .HasColumnType("date");

                entity.Property(e => e.MovieName)
                    .HasColumnName("movie_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Seats>(entity =>
            {
                entity.HasKey(e => e.SeatId);

                entity.ToTable("seats");

                entity.Property(e => e.SeatId)
                    .HasColumnName("seat_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__seats__movie_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__seats__user_id");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_users_userid");

                entity.ToTable("users");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.UserEmail)
                    .HasColumnName("user_email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserIsAdmin).HasColumnName("user_is_admin");

                entity.Property(e => e.UserName)
                    .HasColumnName("user_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .HasColumnName("user_password")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
