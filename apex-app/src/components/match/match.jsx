import { useEffect, useState } from "react";

export default function Match(props) {

    const [data, setData] = useState([]);

    const url = `https://api.mozambiquehe.re/games?auth=89551c25c98af1a967bc6a72a93a04b3&uid=${props.uid}&platform=${props.platform}&history=1&action=get"`

    const fetchData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };  

    function getTime(timeInSec) {

        var gameMin = Math.ceil(timeInSec / 60);
        var gameSec = timeInSec % 60;

        return gameMin + ":" + gameSec;
    }

    var timeInSec = 1342;
    var gameMin = Math.ceil(timeInSec / 60);
    var gameSec = timeInSec % 60;
    
    useEffect(() => {
        fetchData();
    }, [])

    console.log(data)

    return (
        <>
            {
                data.map((d, index) => 
                    <div  key={index} className="flex flex-row space-x-4">
                        <div>{d.name}</div>
                        <div>{d.legendPlayed}</div>
                        <div>{getTime(d.gameLengthSecs)}</div>
                        <div>{d.gameData[0].name}: {d.gameData[0].value}</div>
                        <div>{d.gameData[1].name}: {d.gameData[1].value}</div>
                        <div>{d.gameData[2].name}: {d.gameData[2].value}</div>
                        <div>{d.BRScoreChange}</div>
                        <div>{d.gameEndTimestamp}</div>
                    </div>
                )
            }
        </>
    ) 
}

    // var data = [
    //     {
    //         "uid": "2849572787",
    //         "name": "TehAlux",
    //         "legendPlayed": "Ash",
    //         "gameMode": "UNKNOWN",
    //         "gameLengthSecs": 1342,
    //         "gameStartTimestamp": 1691620791,
    //         "gameEndTimestamp": 1691622133,
    //         "gameData": [
    //             {
    //                 "key": "specialEvent_kills",
    //                 "value": 0,
    //                 "name": "BR Kills"
    //             },
    //             {
    //                 "key": "tactical_enemy_tethered",
    //                 "value": 1,
    //                 "name": "Arc snare: Enemies tethered"
    //             },
    //             {
    //                 "key": "specialEvent_damage",
    //                 "value": 0,
    //                 "name": "BR Damage"
    //             }
    //         ],
    //         "estimatedLevelProgress": 1800,
    //         "BRScoreChange": 0,
    //         "BRScore": 3212,
    //         "ArenasScoreChange": 0,
    //         "ArenasScore": 0,
    //         "isPartyFull": false,
    //         "cosmetics": {
    //             "pose": "Close and Personal",
    //             "skin": "Stinger",
    //             "frame": "Behind the Scenes",
    //             "intro": "None",
    //             "poseRarity": "Rare",
    //             "skinRarity": "Legendary",
    //             "frameRarity": "Rare",
    //             "introRarity": "None"
    //         },
    //         "map": "UNKNOWN"
    //     },
    //     {
    //         "uid": "2849572787",
    //         "name": "TehAlux",
    //         "legendPlayed": "Ash",
    //         "gameMode": "UNKNOWN",
    //         "gameLengthSecs": 1480,
    //         "gameStartTimestamp": 1691619311,
    //         "gameEndTimestamp": 1691620791,
    //         "gameData": [
    //             {
    //                 "key": "specialEvent_kills",
    //                 "value": 0,
    //                 "name": "BR Kills"
    //             },
    //             {
    //                 "key": "tactical_enemy_tethered",
    //                 "value": 4,
    //                 "name": "Arc snare: Enemies tethered"
    //             },
    //             {
    //                 "key": "specialEvent_damage",
    //                 "value": 0,
    //                 "name": "BR Damage"
    //             }
    //         ],
    //         "estimatedLevelProgress": 4680,
    //         "BRScoreChange": 0,
    //         "BRScore": 3212,
    //         "ArenasScoreChange": 0,
    //         "ArenasScore": 0,
    //         "isPartyFull": false,
    //         "cosmetics": {
    //             "pose": "Close and Personal",
    //             "skin": "Stinger",
    //             "frame": "Behind the Scenes",
    //             "intro": "None",
    //             "poseRarity": "Rare",
    //             "skinRarity": "Legendary",
    //             "frameRarity": "Rare",
    //             "introRarity": "None"
    //         },
    //         "map": "UNKNOWN"
    //     }
    // ];