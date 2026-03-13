import { Config as DistressConfig } from 'lib/module/distress'
import { InstallProgress } from 'app/lib/module/module'

export enum Preset {
    GOVERNMENT_AGENCY = 'GOVERNMENT_AGENCY',
    LAPTOP = 'LAPTOP',
    COMFORT = 'COMFORT',
    NORMAL = 'NORMAL',
    MAX = 'MAX',
}

async function installModule (distressConfig: DistressConfig, callback: (progress: InstallProgress) => void) {
  const moduleName = 'DISTRESS' as const
  const versions = await window.modulesAPI.getAllVersions(moduleName)
  const tag = versions[0].tag
  await window.modulesAPI.installVersion(moduleName, tag, callback)

  distressConfig.selectedVersion = tag
  await window.modulesAPI.setConfig(moduleName, distressConfig)
  await window.executionEngineAPI.setModuleToRun(moduleName)
}

async function getDefaultConfig () {
  return await window.modulesAPI.getConfig<DistressConfig>('DISTRESS')
}

export async function configureGovernmentAgencyPreset (callback: (progress: InstallProgress) => void) {
  const distressConfig = await getDefaultConfig()
  distressConfig.concurrency = 212
  await installModule(distressConfig, callback)

  await window.executionEngineAPI.startModule()
  await window.settingsAPI.system.setAutoUpdate(true)
  await window.settingsAPI.system.setStartOnBoot(true)
  await window.settingsAPI.system.setHideInTray(true)
}

export async function configureLaptopPreset (callback: (progress: InstallProgress) => void) {
  const distressConfig = await getDefaultConfig()
  distressConfig.concurrency = 1280
  await installModule(distressConfig, callback)

  await window.executionEngineAPI.startModule()
  await window.settingsAPI.system.setAutoUpdate(true)
  await window.settingsAPI.system.setStartOnBoot(true)
  await window.settingsAPI.system.setHideInTray(true)
}

export async function configureComfortPreset (callback: (progress: InstallProgress) => void) {
  const distressConfig = await getDefaultConfig()
  distressConfig.concurrency = 1512
  await installModule(distressConfig, callback)

  await window.executionEngineAPI.startModule()
  await window.settingsAPI.system.setAutoUpdate(true)
  await window.settingsAPI.system.setStartOnBoot(true)
  await window.settingsAPI.system.setHideInTray(true)
}

export async function configureNormalPreset (callback: (progress: InstallProgress) => void) {
  const distressConfig = await getDefaultConfig()
  await installModule(distressConfig, callback)

  await window.executionEngineAPI.startModule()
  await window.settingsAPI.system.setAutoUpdate(true)
  await window.settingsAPI.system.setStartOnBoot(true)
  await window.settingsAPI.system.setHideInTray(true)
}

export async function configureMaxPreset (callback: (progress: InstallProgress) => void) {
  const distressConfig = await getDefaultConfig()
  distressConfig.concurrency = 65534
  await installModule(distressConfig, callback)

  await window.executionEngineAPI.startModule()
  await window.settingsAPI.system.setAutoUpdate(true)
  await window.settingsAPI.system.setStartOnBoot(true)
  await window.settingsAPI.system.setHideInTray(true)
}

export async function configure (preset: Preset, callback: (progress: InstallProgress) => void) {
  switch (preset) {
    case Preset.GOVERNMENT_AGENCY:
      await configureGovernmentAgencyPreset(callback)
      break
    case Preset.LAPTOP:
      await configureLaptopPreset(callback)
      break
    case Preset.COMFORT:
      await configureComfortPreset(callback)
      break
    case Preset.NORMAL:
      await configureNormalPreset(callback)
      break
    case Preset.MAX:
      await configureMaxPreset(callback)
      break
  }
}
