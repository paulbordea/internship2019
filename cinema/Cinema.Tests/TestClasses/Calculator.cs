using System;
using System.Collections.Generic;
using System.Text;

namespace Cinema.Tests.TestClasses
{
    public class Calculator : ICalculator
    {
        private readonly IExchange _exchange;
        public Calculator(IExchange exchange)
        {
            _exchange = exchange;
        }

        #region ICalculator Members

        public int Divide(int param1, int param2)
        {
            return param1 / param2;
        }
        public int ConvertUsdToClp(int unit)
        {
            return unit * _exchange.GetActualUsdValue();
        }
        #endregion
    }
}
