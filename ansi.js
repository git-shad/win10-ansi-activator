//type: JScript
/**
 * requirements: 
 * -- JScript version 5
 * -- windows 10
 * 
 * repo: github.com/git-shad
 */

{
    var ws = WScript;
    var wshell = new ActiveXObject("WScript.Shell");
    var sys = {
        _in: ws.StdIn,
        _out: ws.StdOut,
        activate: false
    };
    
    var path = "HKCU\\Console\\VirtualTerminalLevel";
    try{//test if registered
        sys.activate = wshell.RegRead(path) == 1? true : false;
    }catch(e){//build if not registered
        wshell.RegWrite(path,0,"REG_DWORD");
    }
    
    if(sys.activate){
        sys._out.Write("\033[38;5;228m[\033[0m \033[38;5;213mActivate\033[0m \033[38;5;75m\033[4m\033[1mANSI\033[22m\033[24m \033[38;5;228m]\033[38;5;195m\n");
        sys._out.Write("is \033[38;5;196menable\033[0m\n\033[38;5;41mdo you want to disable ansi?\033[0m[\033[38;5;27mY\033[0m/\033[38;5;27mn\033[0m]: ");
        
        var result  = sys._in.ReadLine();
        if(result == "y" || result == "Y"){
            wshell.RegWrite(path,0,"REG_DWORD");
            
            try{//checker
                sys.activate = wshell.RegRead(path) == 0? true : false;
                if(sys.activate){
                    sys._out.Write("[ disabled!! ] :)");
                }else{
                    throw "error";
                }
            }catch(e){
                sys._out.Write("something wrong! \ntry run to administrator");
            }
        }else{
            sys._out.Write("nothing change!");
        }
    }else{
        sys._out.Write("[ Activate ANSI ]\n");
        sys._out.Write("is disable\ndo you want to enable ansi?[Y/n]: ");
        
        var result  = sys._in.ReadLine();
        if(result == "y" || result == "Y"){
            wshell.RegWrite(path,1,"REG_DWORD");
            try{//checker
                sys.activate = wshell.RegRead(path) == 1? true : false;
                if(sys.activate){
                    sys._out.Write("[ enabled!! ] :)");
                }else{
                    throw "error";
                }
            }catch(e){
                sys._out.Write("something wrong! \ntry run to administrator");
            }
        }else{
            sys._out.Write("nothing change!");
        }
    }
    sys._in.ReadLine();//pause
}




