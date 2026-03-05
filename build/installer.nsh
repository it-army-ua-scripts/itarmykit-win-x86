!include "LogicLib.nsh"

!macro customInstall
  DetailPrint "Installing Microsoft Visual C++ Redistributable (x86)..."
  ExecWait '"$INSTDIR\resources\VC_redist.x86.exe" /install /quiet /norestart' $0
  ${If} $0 == 0
    DetailPrint "VC++ Redistributable installed."
  ${ElseIf} $0 == 1638
    DetailPrint "VC++ Redistributable is already installed."
  ${ElseIf} $0 == 3010
    DetailPrint "VC++ Redistributable installed. Reboot is required."
  ${Else}
    DetailPrint "VC++ Redistributable installer exited with code $0."
  ${EndIf}
!macroend
