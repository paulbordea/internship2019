using System;
using System.Collections.Generic;
using System.Text;

namespace Cinema.Tests.TestClasses
{
    public interface ICalculator
    {
        int Divide(int param1, int param2);
        int ConvertUsdToClp(int unit);
    }
}
