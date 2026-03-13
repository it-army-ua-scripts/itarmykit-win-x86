!include "LogicLib.nsh"

!macro WritePrerequisiteLog message
  FileOpen $2 "$INSTDIR\install-prerequisites.log" a
  FileSeek $2 0 END
  FileWrite $2 "${message}$\r$\n"
  FileClose $2
!macroend

!macro customInstall
  IfFileExists "$INSTDIR\resources\VC_redist.x86.exe" runVcRedist skipVcRedist

  runVcRedist:
  ExecWait '"$INSTDIR\resources\VC_redist.x86.exe" /install /quiet /norestart' $R0

  ${If} "$R0" == "0"
    DetailPrint "VC++ Redistributable installed."
    !insertmacro WritePrerequisiteLog "VC++ Redistributable installed."
  ${ElseIf} "$R0" == "1638"
    DetailPrint "VC++ Redistributable is already installed."
    !insertmacro WritePrerequisiteLog "VC++ Redistributable is already installed."
  ${ElseIf} "$R0" == "3010"
    DetailPrint "VC++ Redistributable installed. Reboot is required."
    !insertmacro WritePrerequisiteLog "VC++ Redistributable installed. Reboot is required."
  ${Else}
    DetailPrint "VC++ Redistributable installation returned code $R0. Continuing without bundled runtime."
    !insertmacro WritePrerequisiteLog "VC++ Redistributable returned code $R0. Installation continued."
    MessageBox MB_ICONEXCLAMATION|MB_OK "Microsoft Visual C++ Redistributable installation returned code $R0. ITArmyKit will still be installed. If the app does not start, install the Microsoft Visual C++ x86 Redistributable manually and try again."
  ${EndIf}
  Goto doneVcRedist

  skipVcRedist:
  DetailPrint "VC++ Redistributable payload was not bundled. Skipping runtime install step."
  !insertmacro WritePrerequisiteLog "VC++ Redistributable payload missing. Skipped."

  doneVcRedist:
!macroend
