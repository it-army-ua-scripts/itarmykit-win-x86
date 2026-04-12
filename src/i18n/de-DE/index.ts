// This is just an example,
// so you can safely delete all default props below

export default {
  layout: {
    dashboard: 'Hauptseite',
    modules: 'DDOS-Module',
    activeness: 'Activeness',
    settings: 'Einstellungen',
    schedule: 'Planung',
    top: 'Ranglisten',
    developers: 'Entwickler'
  },
  schedule: {
    title: 'Planung',
    description: 'AusgewГ¤hlte Module nach Zeitfenster automatisch starten und stoppen.',
    enabled: 'Scheduler aktivieren',
    enabledDescription: 'Wenn aktiv, steuert die App Start/Stopp nach den gewГ¤hlten Zeiten.',
    startTime: 'Startzeit',
    endTime: 'Endzeit',
    intervalModule: 'Modul',
    modulesTitle: 'Module im Zeitfenster',
    intervalsTitle: 'Zeitintervalle',
    noIntervals: 'Keine Intervalle konfiguriert.',
    daysTitle: 'Wochentage',
    addInterval: 'Intervall hinzufГјgen',
    removeInterval: 'Intervall entfernen',
    days: {
      sun: 'So',
      mon: 'Mo',
      tue: 'Di',
      wed: 'Mi',
      thu: 'Do',
      fri: 'Fr',
      sat: 'Sa'
    },
    close: 'SchlieГџen',
    autoSaveHint: 'Г„nderungen werden automatisch gespeichert.',
    overlapError: 'Intervalle dГјrfen sich nicht Гјberschneiden.',
    saveFailed: 'Zeitplan konnte nicht gespeichert werden. Fehler: {error}'
  },
  modules: {
    menu: {
      main: 'Hauptseite',
      active: 'Aktives Modul',
      available: 'VerfГјgbare Module'
    },
    active: {
      selected: 'AusgewГ¤hltes Modul zum Start',
      enabled: {
        title: 'Modul aktivieren',
        caption: 'ModulausfГјhrung aktivieren oder deaktivieren'
      },
      executionLog: 'AusfГјhrungsprotokoll',
      stdout: 'Standardausgabe (stdout)',
      stderr: 'Standardfehlerausgabe (stderr)'
    },
    available: {
      configuration: 'Konfiguration',
      selVersion: 'Version auswГ¤hlen',
      selVersionDescription: 'Die Modulversion zum Start',
      autoupdates: 'Automatische Updates',
      autoupdatesDescription: 'Das Modul automatisch auf die neueste Version aktualisieren',
      arguments: 'Startparameter (fГјr fortgeschrittene Nutzer)',
      argumentsDescription: 'ZusГ¤tzliche Startparameter fГјr die AusfГјhrung der BinГ¤rdatei',
      versions: {
        versions: 'Liste der Versionen',
        downloadInstall: 'Herunterladen und Installieren',
        selectUse: 'FГјr Verwendung auswГ¤hlen'
      }
    },
    distress: {
      concurrency: 'NebenlГ¤ufigkeit',
      concurrencyDescription: 'Die Anzahl der Aufgabenersteller. 0 setzt Standardwert auf 4096 ',
      torConnections: 'Tor-Verbindungen',
      torConnectionsDescription: 'Tor-Verbindungen fГјr den Angriff verwenden',
      useMyIp: 'Meine IP benutzen',
      useMyIpDescription: 'Der Prozentanteil der Verwendung Ihrer eigenen IP-Adresse oder VPN, wenn konfiguriert',
      UDPFlood: 'UDP-Flood deaktivieren',
      UDPFloodDescription: 'UDP-Flood-Angriff verbieten. Funktioniert nur mit Ihrer eigenen IP-Adresse',
      ICMPFlood: 'ICMP-Flood aktivieren',
      ICMPFloodDescription: 'ICMP-Flood-Angriff erlauben. Funktioniert nur mit Ihrer eigenen IP-Adresse',
      PACKETFlood: 'PACKET-Flood aktivieren',
      PACKETFloodDescription: 'Funktioniert nicht unter OS Windows! PACKET-Flood-Angriff erlauben. Funktioniert nur mit Ihrer eigenen IP-Adresse'
    }
  },
  top: {
    volunteers: 'TOP FREIWILLIGE',
    week: 'Pro Woche',
    month: 'Pro Monat',
    activeness: 'Activeness',

    achievements: {
      peopleAreLikeShips: {
        title: 'Menschen sind wie Schiffe',
        subtitle: 'Wenn sie russisch sind, fahren sie zur HГ¶lle',

        body: 'Es scheint, als hГ¤tten Sie gerade versucht, die russische Sprache auszuwГ¤hlen. Sie brauchen uns, um Sie zu retten. Keine Sorge, wir werden Sie bald denazifizieren und befreien.',
        explanationHint: 'Ich verstehe nicht. ErlГ¤utern Sie mir dieses Meme.',
        explanation: '"russisches Kriegsschiff, geh fick dich selbst", war die letzte Kommunikation, die am 24. Februar, dem ersten Tag der Snake-Island-Kampagne 2022, vom ukrainischen GrenzschГјtzer Roman Hrybov an den russischen Lenkwaffenkreuzer moskva gerichtet wurde. Am 13. April 2022 wurde moskva durch eine Explosion, verursacht von ukrainischen Anti-Schiffs-Raketen, kritisch beschГ¤digt und sank am folgenden Tag. "Menschen sind wie Schiffe" ist ein bekanntes Lied der Band Skryabin in der Ukraine. Die Denazifizierung und die Befreiung der Ukrainer sind Slogans der russischen Propaganda der "russischen Welt"-Doktrin.',
        goodButton: 'Ich bin albern. Bitte befreien Sie mich',
        badButton: 'Ich mag die Ukraine nicht'
      }
    },

    activenessData: {
      notifyLoadFailed: 'Fehler beim Laden der Activeness-Statistiken. Fehler: {error}'
    }
  },
  bootstrap: {
    title: 'Es scheint, dies ist Ihr erster Start. Lassen Sie uns Ihnen helfen.',

    header: {
      language: 'Sprache auswГ¤hlen',
      data: 'Daten',
      itarmy: 'ITArmy ID',
      module: 'Module'
    },

    language: {
      continueButton: 'Weiter'
    },

    data: {
      body: 'Die Anwendung wird automatisch die erforderlichen Module herunterladen und auf Ihrem PC speichern. Module und alle Daten werden im Ordner gespeichert',
      windows: 'Bevor Sie fortfahren, stellen Sie sicher, dass Sie den Datenordner zu den Ausnahmen von Windows Defender und dem Antivirenprogramm hinzugefГјgt haben. Andernfalls werden alle heruntergeladenen Daten gelГ¶scht.',
      openDataFolderButton: 'Datenordner Г¶ffnen',
      changeDataFolderButton: 'Datenordner Г¤ndern',
      continueButton: 'Weiter',
      backButton: 'ZurГјck'
    },

    itarmy: {
      body: "Wenn Sie eine ITArmy ID haben, geben Sie sie unten ein. Andernfalls klicken Sie auf die 'Weiter' Taste",
      uuidInputTitle: 'ITArmy ID',
      continueButton: 'Weiter',
      backButton: 'ZurГјck'
    },

    module: {
      body: 'WГ¤hlen Sie eine Voreinstellung aus. Alle Daten kГ¶nnen dann geГ¤ndert werden',
      installation: {
        title: 'Modulinstallation'
      },
      preset: {
        government: {
          title: 'Staatseinrichtung / Alter PC',
          description: 'Diese Voreinstellung verwendet so wenig Ressourcen wie mГ¶glich. Dies kann einige Modulfunktionen deaktivieren.'
        },
        laptop: {
          title: 'Laptop',
          description: 'Diese Voreinstellung versucht, so wenig Ressourcen wie mГ¶glich zu verwenden, ohne dabei Funktionen zu deaktivieren.'
        },
        comfort: {
          title: 'Komfort',
          description: 'Diese Voreinstellung verwendet Ressourcen im Komfortmodus. Es beeintrГ¤chtigt die Leistung Ihres Computers nicht.'
        },
        normal: {
          title: 'Normal',
          description: 'Normaler Heimcomputer. Diese Voreinstellung verwendet standardmГ¤Гџig die Konfiguration, die von den Modulentwicklern bereitgestellt wird.'
        },
        max: {
          title: 'Maximal',
          description: 'HГ¶chste Leistung. Diese Voreinstellung verwendet die maximale RessourcenkapazitГ¤t Ihres Computers. Dies kann VerzГ¶gerungen in anderen Programmen verursachen.'
        },
        expert: {
          title: 'Experte',
          description: 'Diese Voreinstellung fГјhrt keine Aktionen aus. Alle Einstellungen mГјssen manuell gesetzt werden.'
        }
      }
    },

    doneDialog: {
      title: 'Einrichtung abgeschlossen',
      body: 'Jetzt kГ¶nnen Sie die Anwendung verwenden. Wir benГ¶tigen jedoch noch etwas Zeit, um alles vorzubereiten (1-3 Minuten). WГ¤hrend dieser Zeit kann es keine Updates auf dem Hauptdashboard geben. Dies ist normal fГјr den ersten Start :) In wenigen Minuten werden Diagramme und aktuelle Informationen auf dem Hauptdashboard angezeigt.',
      finishButton: "GroГџartig! Los geht's!"
    }
  },
  settings: {
    system: 'System',
    look: 'GUI',
    theme: 'Thema',
    mode: 'Modus',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    modeDefault: 'Standard',
    modeEaster: 'Ostern',
    modeMatrix: 'Matrix',
    locked: 'gesperrt',
    modeLockedHint: 'Der Matrix-Modus wird erst nach dem L\u00f6sen des Easter Eggs verf\u00fcgbar.',
    darkMode: 'Dunkelmodus',
    matrixMode: 'Matrix-Modus',
    autoUpdates: 'Automatische Updates',
    autoUpdatesDescription: 'Die Anwendung automatisch auf die letzte Version aktualisieren.',
    autoStartup: 'Autostart',
    autoStartupDescription: 'Die Anwendung automatisch starten, wenn das System hochfГ¤hrt.',
    hideTray: 'Anwendung im Infobereich verstecken',
    hideTrayDescription: 'Die App im Infobereich verstecken, aber nicht schlieГџen. Das Hauptfenster beim Start nicht anzeigen.',
    language: 'Sprache',
    idDescription: 'Wie kann man ID bekommen? Schauen Sie nach',
    data: 'Speicher',
    dataDescription: 'Derzeit sind Ihre Module im Ordner:',
    warnDelStatistics: 'Sind Sie sicher, dass Sie alle Statistiken lГ¶schen mГ¶chten?',
    warnDelCache: 'Sind Sie sicher, dass Sie den Modulcache lГ¶schen mГ¶chten? Die App wird nach dieser Aktion geschlossen und mГ¶glicherweise nicht automatisch neu gestartet.',
    warnDelData: 'Sind Sie sicher, dass Sie alle Daten lГ¶schen mГ¶chten, einschlieГџlich Cache, Einstellungen und Module? Die App wird nach dieser Aktion geschlossen und mГ¶glicherweise nicht automatisch neu gestartet',
    openDataFolder: 'Dateinordner Г¶ffnen',
    changeModulesDataLocation: 'Den Speicherort der Moduldaten Г¤ndern',
    deleteStatistics: 'Statistiken lГ¶schen',
    deleteModulesCache: 'Modulcache lГ¶schen',
    deleteAllTheData: 'Werkseinstellungen',
    diagnostics: {
      title: 'Diagnose',
      description: 'Dienstwerkzeuge zur Fehlersuche.',
      openProfileFolder: 'Profilordner',
      openStabilityLog: 'Stability-Log'
    },

    matrixQuiz: {
      header: 'Wach auf, {name} ...',
      body: 'Sie sind genetisch modifizierter Ukrnazi aus den Labors von Westukraine. Wir alle sind gehirngewaschen und denken gleich. Beantworte Assoziationen (das Erste, was dir in den Sinn kommt), um das zu beweisen.',

      q1: 'Was raschelt?',
      q2: 'Wer ist putin?',
      q3: 'Was ist ausgetrocknet?',

      cancell: 'Aufwachen, als wГ¤re nichts passiert',
      submit: 'Ab ins Kaninchenloch'
    }
  },

  dashboard: {
    statistics: 'Angriffskraft-Statistiken',
    bytes: 'Gesendet / Datenverkehr / Insgesamt',
    bytesHint: 'Die Statistiken zum gesendeten Datenverkehr kГ¶nnen ungenau sein. Dies hГ¤ngt vom Modul und seiner Funktionsweise ab. Die Gesamtstatistik ist immer prГ¤zise und zeigt aggregierte Informationen aus allen laufenden Tools an.',
    moduleStatus: 'Modul-Status',
    control: 'Systemsteuerung',
    autostart: 'Autostart',
    scheduler: 'Scheduler',
    cpuLoad: 'CPU',
    ramLoad: 'RAM',
    on: 'AN',
    off: 'AUS',
    intervals: 'Intervalle',
    updates: 'KIT Version',
    latest: 'Aktuell',
    chart: {
      now: 'Jetzt',
      average: 'Durchschnitt',
      peak: 'Spitzenwert',
      bitrate: 'Datenrate',
      trend: 'Trend',
      view: {
        raw: 'Roh',
        smooth: 'GeglГ¤ttet'
      },
      noData: 'Noch keine Statistik',
      events: {
        started: 'Gestartet',
        stopped: 'Gestoppt',
        error: 'Fehler'
      },
      ranges: {
        m5: '5 Min',
        m15: '15 Min',
        h1: '1 Std',
        h6: '6 Std'
      }
    },
    activeness: {
      score: 'Activeness Score'
    },
    itarmyAPIKeyEmpty: 'IT Army ID ist nicht angegeben. Es ist nicht kritisch, aber es ist erforderlich, um allgemeine Statistiken anzuzeigen. Sie kГ¶nnen sie in den Einstellungen angeben.'
  },

  developers: {
    itaySubtitle: 'Eine Community ukrainischer IT-Spezialisten, die Ende Februar 2022 gegrГјndet wurde, um den Feind im Informations- und Cyberspace nach dem Beginn der russischen Invasion in der Ukraine am 24. Februar 2022 zu neutralisieren.',
    shieldMore: 'Erfahren Sie mehr Гјber uns und unsere Operationen:',
    partners: 'Kollegen und Partner',
    contacts: 'Kontakte',
    contactP1: 'FГјr Fragen zur Anwendung, fragen Sie zunГ¤chst im IT Army-Chat:',
    contactP1_1: 'Oder als letztes Mittel, auf unserem Kanal',
    contactP1_2: 'Wenn Sie uns auf dem Kanal schreiben, denken Sie daran, dass wir nur Гјber sehr begrenzte Ressourcen verfГјgen und mГ¶glicherweise nicht antworten kГ¶nnen. In der Regel gibt es jedoch Community-Mitglieder, die Ihnen helfen kГ¶nnen.',
    contactP2: 'Technische Probleme mit der Anwendung - wenn Sie wissen, wie man GitHub verwendet, erstellen Sie bitte ein Issue im Repository.',
    contactP2_1: 'Wenn nicht - fragen Sie im IT Army-Chat.',
    contactP3: 'Fragen Гјber Module - richten Sie sie an die Modul-Entwickler.',
    contributors: 'Mitwirkende',
    contributorsSubtitle: 'Helfen Sie dabei, das Programm zu verbessern, und Ihr Name wird automatisch in dieser Liste erscheinen. Die Liste zeigt auch Mitwirkende zur vorherigen Version der Anwendung und einigen Modulen.'
  },

  activeness: {
    login: {
      title: 'Activeness Login',
      email: 'E-Mail',
      password: 'Passwort',
      info: 'UnglГјcklicherweise erfordert Activeness zusГ¤tzliche Anmeldung zur Verwendung. In Zukunft werden wir versuchen, eine Anmeldung fГјr alle IT Army-Dienste bereitzustellen. Wenn Sie nicht wissen, was Activeness ist, besuchen Sie https://activeness.social/.',
      loginButton: 'Einloggen / Registrieren',
      failed: 'Anmeldung fehlgeschlagen. ГњberprГјfen Sie Ihre Anmeldeinformationen/Netzwerkverbindung/Activeness-Status und versuchen Sie es erneut.'
    },
    tasksTable: {
      title: 'Aufgaben',
      id: 'ID',
      what: 'Was ist zu tun',
      link: 'Link',
      description: 'Beschreibung',
      actions: 'Aktionen',
      priority: 'Diese Aufgabe hat PrioritГ¤t. Es ist sehr wichtig, sie zuerst zu erledigen'
    },

    logoutButton: 'Ausloggen',
    suggesttarget: 'Mein Ziel vorschlagen',

    notifyTaskLoadFailed: 'Fehler beim Laden der Aufgaben. Fehler: {error}',
    notifyFailedToMakeTaskDone: 'Fehler beim Markieren der Aufgabe als erledigt. Fehler: {error}',
    notifyFailedTOIgnoreTask: 'Fehler beim Ignorieren der Aufgabe. Fehler: {error}'
  }
}
