using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Cinema.DataAccess;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Services
{
    public class SeatsService : ISeatsService
    {
        private readonly CinemaContext _cinemaContext;
        public SeatsService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        public ArrayList GetSeats(int movieId, DateTime date)
        {
            ArrayList seatsAvailabilityMatrix = null;

            var seatsAvailableFromDb = _cinemaContext.Seat.Where(x => x.MovieId == movieId && x.Date == date).ToList();
            if (seatsAvailableFromDb.Count == 0)
            {
                seatsAvailabilityMatrix = generateSeats();
            }

            return seatsAvailabilityMatrix;
        }

        private ArrayList generateSeats()
        {
            ArrayList matrix = new ArrayList();
            int noLines = 10;

            for (int i = 0; i < noLines; i++)
            {
                ArrayList rowWithSeats = new ArrayList();

                for (int j = i * noLines; j < (i + 1) * noLines; j++)
                {
                    rowWithSeats.Add(new SeatAvailability { Free = true, Seat_no = j + 1 });
                }
                matrix.Add(rowWithSeats.Clone());
            }
            return matrix;
        }

        public void InsertSeats(BookingInfo info)
        {
            List<Seat> seats = new List<Seat>();
            Seat seat;

            foreach (var seatInfo in info.SeatsList)
            {
                seat = new Seat();
                seat.MovieId = info.MovieId;
                seat.SeatNumber = seatInfo;
                seat.Date = info.Date;
                seats.Add(seat);
            }

            if (_cinemaContext != null)
            {
                _cinemaContext.Seat.AddRange(seats);
                _cinemaContext.SaveChanges();
            }
        }
    }
}
