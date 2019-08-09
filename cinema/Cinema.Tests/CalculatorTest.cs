using Cinema;
using Cinema.Tests.TestClasses;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace Cinema.Tests
{
    [TestClass]
    public class CalculatorTest
    {
        private Mock<IExchange> _mockObject;
        private void Setup()
        {
            _mockObject = new Mock<IExchange>();
            _mockObject.Setup(m => m.GetActualUsdValue()).Returns(500);
        }

        [TestMethod]
        public void Divide()
        {
            Setup();
            ICalculator calculator = new Calculator(_mockObject.Object);
            var result = calculator.Divide(9, 3);
            var expected = 3;
            Assert.AreEqual(expected, result);
        }

        [TestMethod]
        public void ConvertUsdToClp()
        {
            Setup();
            ICalculator calculator = new Calculator(_mockObject.Object);
            var result = calculator.ConvertUsdToClp(9);
            var expected = 4500;
            Assert.AreEqual(expected, result);
        }

    }
}
