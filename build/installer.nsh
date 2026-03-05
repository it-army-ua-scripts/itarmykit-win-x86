!include "LogicLib.nsh"

!macro customInit
  CreateDirectory "$TEMP\ITArmyKit"
  SetOutPath "$TEMP\ITArmyKit"
  File "/oname=$TEMP\ITArmyKit\VCRedist.exe" "${PROJECT_DIR}\VCRedist.exe"
  ExecWait '"$TEMP\ITArmyKit\VCRedist.exe" /S' $0
  Delete "$TEMP\ITArmyKit\VCRedist.exe"
  RMDir "$TEMP\ITArmyKit"

  ${If} $0 == 0
    DetailPrint "VC++ Redistributable installed."
  ${ElseIf} $0 == 1638
    DetailPrint "VC++ Redistributable is already installed."
  ${ElseIf} $0 == 3010
    DetailPrint "VC++ Redistributable installed. Reboot is required."
  ${Else}
    MessageBox MB_ICONSTOP|MB_OK "Microsoft Visual C++ Redistributable installation failed with code $0. Application installation will be cancelled."
    Abort
  ${EndIf}
!macroend
