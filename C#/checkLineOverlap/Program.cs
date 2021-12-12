using System;

namespace checkLineOverlap
{

    public class line
    {
        public line(int x, int xlen)
        {
            this.lineStart = x;
            this.lineLen = xlen;
            this.lineEnd = x + xlen;
        }
        public int lineStart { get; set; }
        public int lineLen { get; set; }
        public int lineEnd { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("input two lines:" + Environment.NewLine);
            // string input01 = Console.ReadLine();
            // Console.WriteLine(input01);
            // string [] in01 = input01.Split(" ");
            // string input02 = Console.ReadLine();
            // string [] in02 = input02.Split(" ");

            line line01 = new line(8, 9);
            line line02 = new line(3, 4);
            // line line01 = new line(4, 9);
            // line line02 = new line(3, 4);

            if (checkOverlap(line01, line02))
            {
                Console.WriteLine("Overlap!");
            }
            else
            {
                Console.WriteLine("Not Overlap!");
            }
        }

        static bool checkOverlap(line line01, line line02)
        {
            // int line01End = line01.lineStart + line01.lineLen;
            // int line02End = line02.lineStart + line02.lineLen;
            //     ----
            //        ---
            //---
            //          -------
            //------
            //  if ((line01.lineStart < line02.lineStart && line01End < line02.lineStart) || (line01.lineStart > line02End && line01End > line02End))

            if ( line01.lineEnd < line02.lineStart || 
                line02.lineEnd < line01.lineStart)
            {
                return false;
            }
            return true;                
        }
        
    }
    
}


// bool checkOverlap(line line01, line line02)
// 	{
// 		line front, end;
// 		if (line01.lineStart <= line02.lineStart) {
// 			front = line01;
// 			end = line02;
// 		} else {
// 			front = line02;
// 			end = line01;
// 		}
// 		return front.lineEnd >= end.lineStart;
// 	}