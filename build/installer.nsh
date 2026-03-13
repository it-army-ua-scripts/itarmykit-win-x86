!include "LogicLib.nsh"

!macro customInstall
  IfFileExists "$INSTDIR\resources\VC_redist.x86.exe" runVcRedist skipVcRedist

  runVcRedist:
  ExecWait '"$INSTDIR\resources\VC_redist.x86.exe" /install /quiet /norestart' $R0

  ${If} "$R0" == "0"
    DetailPrint "VC++ Redistributable installed."
  ${ElseIf} "$R0" == "1638"
    DetailPrint "VC++ Redistributable is already installed."
  ${ElseIf} "$R0" == "3010"
    DetailPrint "VC++ Redistributable installed. Reboot is required."
  ${Else}
    DetailPrint "VC++ Redistributable installation returned code $R0. Continuing without bundled runtime."
  ${EndIf}
  Goto doneVcRedist

  skipVcRedist:
  DetailPrint "VC++ Redistributable payload was not bundled. Skipping runtime install step."

  doneVcRedist:
!macroend
