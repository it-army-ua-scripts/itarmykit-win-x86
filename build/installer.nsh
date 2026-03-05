!include "LogicLib.nsh"

!macro customInstall
  ExecWait '"$INSTDIR\resources\VC_redist.x86.exe" /install /quiet /norestart' $R0

  ${If} "$R0" == "0"
    DetailPrint "VC++ Redistributable installed."
  ${ElseIf} "$R0" == "1638"
    DetailPrint "VC++ Redistributable is already installed."
  ${ElseIf} "$R0" == "3010"
    DetailPrint "VC++ Redistributable installed. Reboot is required."
  ${Else}
    MessageBox MB_ICONSTOP|MB_OK "Microsoft Visual C++ Redistributable installation failed with code $R0. Application installation will be cancelled."
    Abort
  ${EndIf}
!macroend
