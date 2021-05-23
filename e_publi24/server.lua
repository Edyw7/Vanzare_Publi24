local DISCORD_WEBHOOK = "https://discord.com/api/webhooks/777546611798704178/Cb_IX6sStDK3Hgz52KLXudxX4MVWQUGpJaSve5hrmdTjaHFtNXaTjEEgBSCrZ9D9R9FF"
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)




RegisterServerEvent('log')
AddEventHandler('log', function(data)



    local connect = {
        {
            ["color"] = "255",
            ["title"] = "Anunt Publi24 | " ..data.plate.."-"..data.lastname,
            ["description"] = "Nume: \n **"..data.plate.."** \n Prenume: \n **"..data.lastname.."** \n Varsta .: \n **"..data.age.."** \n Ce vrei sa vinzi: \n **"..data.rage.."** \n Tip: \n**"..data.why.."**\n Tip:\n "..data.gender.. "**\n CNP: \n"..data.id.."**\n Discord::\n "..data.dis,
	        ["footer"] = {
            ["text"] = "Anunt Publi24",
            },
        }
    }
    PerformHttpRequest(DISCORD_WEBHOOK, function(err, text, headers) end, 'POST', json.encode({username = "Anunt Publi24",  avatar_url = "https://cdn.discordapp.com/attachments/551522300642459665/846105766309527582/unknown.png",embeds = connect}), { ['Content-Type'] = 'application/json' })
end)

