using System;
using Microsoft.Win32;
namespace Win10_ANSI
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("This program is for windows 10 ANSI escape sequences Modification, ANSI scape sequence are a standard for in-band signaling to control cursor location, color, font styling, and other options, for more info about how to use ANSI sequence visite(https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#file-ansi-md)");
            
            String valueName = "VirtualTerminalLevel";
            String nameKey = "HKEY_CURRENT_USER\\Console";
            Console.Write("\nPermision to (de)activate ANSI to your Win10 [Y/n]: ");
            var conK = Console.ReadKey();
            if (conK.Key.ToString() == "Y")
            {
                Registry.SetValue(nameKey, valueName,0x000000001,RegistryValueKind.QWord);
            }
            else if (conK.Key.ToString() == "N")
            {
                Registry.SetValue(nameKey, valueName, 0x000000000, RegistryValueKind.QWord);
            }
            Console.WriteLine("\ndone!");
            Console.ReadKey();
        }
    }
}
