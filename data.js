var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1802278863823421,
        "pitch": -0.951919246975411,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.10625896720611117,
          "pitch": 0.11820367003289789,
          "rotation": 0,
          "target": "1-ingreso-al-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso-al-hall",
      "name": "Ingreso al Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9538361254719643,
          "pitch": 0.17598547979248735,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": -0.01415315857438948,
          "pitch": 0.24122530635498052,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.139704825542502,
          "pitch": 0.2802720334540343,
          "rotation": 0,
          "target": "1-ingreso-al-hall"
        },
        {
          "yaw": -0.3916217817367613,
          "pitch": 0.14560611496676756,
          "rotation": 0.7853981633974483,
          "target": "3-ascensor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor",
      "name": "Ascensor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.324960007589322,
          "pitch": 0.1810237815882747,
          "rotation": 5.497787143782138,
          "target": "2-hall"
        },
        {
          "yaw": 0.02340148581831869,
          "pitch": 0.0912881909469192,
          "rotation": 0,
          "target": "4-acceso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-acceso-al-dpto",
      "name": "Acceso al dpto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.18521861449735866,
        "pitch": 0.03015812120753303,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.2599565501468284,
          "pitch": 0.06382377396920269,
          "rotation": 3.141592653589793,
          "target": "3-ascensor"
        },
        {
          "yaw": 0.11153947266346975,
          "pitch": 0.09169033798049497,
          "rotation": 0,
          "target": "5-ingreso-depto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ingreso-depto",
      "name": "Ingreso Depto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8977726500583785,
          "pitch": 0.09098433314615129,
          "rotation": 0,
          "target": "8-ingreso-a-cuartos"
        },
        {
          "yaw": 0.9920633225726316,
          "pitch": 0.17368362698987028,
          "rotation": 0,
          "target": "6-living--comedor-"
        },
        {
          "yaw": 1.7840882677589978,
          "pitch": 0.11327904549590251,
          "rotation": 1.5707963267948966,
          "target": "13-cocina"
        },
        {
          "yaw": 3.1326499445519964,
          "pitch": 0.19288544939034757,
          "rotation": 0,
          "target": "4-acceso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living--comedor-",
      "name": "Living / Comedor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09082835903235775,
        "pitch": 0.10555342422634872,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.4896879768668434,
          "pitch": 0.15385336659285898,
          "rotation": 0.7853981633974483,
          "target": "5-ingreso-depto"
        },
        {
          "yaw": -3.0729045930866157,
          "pitch": 0.15571428096681927,
          "rotation": 0,
          "target": "13-cocina"
        },
        {
          "yaw": 0.036391639595112935,
          "pitch": 0.19121128615145722,
          "rotation": 0,
          "target": "7-balcn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-balcn",
      "name": "Balcón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1190196303762487,
          "pitch": 0.2042550307587323,
          "rotation": 0,
          "target": "6-living--comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ingreso-a-cuartos",
      "name": "Ingreso a cuartos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2433676586701985,
        "pitch": 0.3243512059732119,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.6086098634233181,
          "pitch": 0.15759353646663143,
          "rotation": 5.497787143782138,
          "target": "6-living--comedor-"
        },
        {
          "yaw": -1.703251877732317,
          "pitch": 0.226796727233868,
          "rotation": 0,
          "target": "11-antebao"
        },
        {
          "yaw": 0.09166073306543865,
          "pitch": 0.13850501050306718,
          "rotation": 0,
          "target": "10-cuarto-ii"
        },
        {
          "yaw": -0.5323590154886944,
          "pitch": 0.12778185505410633,
          "rotation": 5.497787143782138,
          "target": "9-cuarto-i"
        },
        {
          "yaw": 2.1591833861597625,
          "pitch": 0.21565587858979818,
          "rotation": 1.5707963267948966,
          "target": "5-ingreso-depto"
        },
        {
          "yaw": 1.9510676490444778,
          "pitch": 0.08498885774769782,
          "rotation": 1.5707963267948966,
          "target": "13-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cuarto-i",
      "name": "Cuarto I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.508302912463508,
          "pitch": 0.11897962180752586,
          "rotation": 5.497787143782138,
          "target": "8-ingreso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cuarto-ii",
      "name": "Cuarto II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.642302696640362,
          "pitch": 0.18489689742303383,
          "rotation": 0,
          "target": "8-ingreso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-antebao",
      "name": "Antebaño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4041575468625638,
          "pitch": 0.15035763589605544,
          "rotation": 0,
          "target": "12-bao"
        },
        {
          "yaw": -1.6540272158037137,
          "pitch": 0.19736952663299334,
          "rotation": 0,
          "target": "8-ingreso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.835271637160913,
        "pitch": 0.28398571791883676,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.8530559490955323,
          "pitch": 0.18554570516066704,
          "rotation": 0.7853981633974483,
          "target": "11-antebao"
        },
        {
          "yaw": -1.1508179318440277,
          "pitch": 0.2245928685604568,
          "rotation": 0,
          "target": "8-ingreso-a-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3579705914804663,
        "pitch": 0.1583301363395222,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.030591586960149,
          "pitch": 0.17369261570851258,
          "rotation": 0,
          "target": "6-living--comedor-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
