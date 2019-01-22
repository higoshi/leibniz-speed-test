using System;

class Leibniz
{

    public static double leibnizPow(double i)
    {
        return Math.Pow(-1, i) / (2 * i + 1);
    }

    public static double leibniz(int n)
    {
        double r = .0;
        for (int i = 0; i < n; i++)
        {
            r += leibnizPow(i);
        }
        return 4 * r;
    }

    public static void Main(string[] args)
    {
        int step = 0;
        if (int.TryParse(args[0], out step)) {
            double result = Leibniz.leibniz(step);
            Console.WriteLine(result);
        }
    }
}