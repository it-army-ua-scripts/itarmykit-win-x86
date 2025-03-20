import { Distress, Config as DistressConfig } from 'app/lib/module/distress'
import { ModuleName, Module } from 'app/lib/module/module'
import { IpcMainInvokeEvent, ipcMain } from 'electron'

export function handleModules (modules: Array<Distress>) {
  ipcMain.handle('modules:getAllVersions', async (_e, moduleName: ModuleName) => {
    const module = modules.find(m => m.name === moduleName)
    if (!module) {
      throw new Error(`Module ${moduleName} not found`)
    }

    return await module.getAllVersions()
  })

  ipcMain.handle('modules:installVersion', async (_e, moduleName: ModuleName, versionTag: string) => {
    const module = modules.find(m => m.name === moduleName)
    if (!module) {
      throw new Error(`Module ${moduleName} not found`)
    }

    for await (const progress of module.installVersion(versionTag)) {
      _e.sender.send('modules:installProgress', moduleName, versionTag, progress)
    }
  })

  ipcMain.handle('modules:uninstallVersion', async (_e, moduleName: ModuleName, versionTag: string) => {
    const module = modules.find(m => m.name === moduleName)
    if (!module) {
      throw new Error(`Module ${moduleName} not found`)
    }

    await module.uninstallVersion(versionTag)
  })

  ipcMain.handle('modules:getConfig', async (_e: IpcMainInvokeEvent, moduleName: ModuleName) => {
    const module = modules.find(m => m.name === moduleName)
    if (!module) {
      throw new Error(`Module ${moduleName} not found`)
    }

    return await module.getConfig()
  })

  ipcMain.handle('modules:setConfig', async (_e, moduleName: ModuleName, config: DistressConfig) => {
    const module = modules.find(m => m.name === moduleName)
    if (!module) {
      throw new Error(`Module ${moduleName} not found`)
    }

    await (module as Module<typeof config>).setConfig(config)
  })
}