@echo off
%windir%\Microsoft.NET\Framework64\v4.0.30319\msbuild.exe Win10-ANSI.csproj /t:Rebuild /p:Configuration=Release;TargetFrameworkVersion=v3.5
pause
