!include "LogicLib.nsh"

!macro customInit
  CreateDirectory "$TEMP\ITArmyKit"
  SetOutPath "$TEMP\ITArmyKit"
  DetailPrint "Staging VC++ installer to: $TEMP\ITArmyKit\VCRedist.exe"
  File "/oname=$TEMP\ITArmyKit\VCRedist.exe" "${PROJECT_DIR}\VCRedist.exe"
  IfFileExists "$TEMP\ITArmyKit\VCRedist.exe" +3 0
    MessageBox MB_ICONSTOP|MB_OK "VCRedist.exe was not staged to $TEMP\ITArmyKit"
    Abort
  ExecWait '"$TEMP\ITArmyKit\VCRedist.exe" /S' $R0

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

  Delete "$TEMP\ITArmyKit\VCRedist.exe"
  RMDir "$TEMP\ITArmyKit"
!macroend
