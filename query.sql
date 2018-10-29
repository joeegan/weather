INSERT INTO `marshfield` 
            (`id`, 
             `date_time`, 
             `temp_act`, 
             `wind_chill_act`, 
             `dew_act`,
             `hum_act`,
             `wind_speed_act`,
             `wind_dir_act`,
             `sol_rad_act`,
             `rain_rate_act`, 
             `rain_total_daysum`, 
             `wind_speed_avg_60`
) 
VALUES      (NULL, 
             '[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]',
             '[th0temp-act]', 
             '[wind0chill-act]', 
             '[th0dew-act]', 
             '[th0hum-act]',
             '[wind0wind-act=mph]', 
             '[wind0dir-act]', 
             '[sol0rad-act]',
             '[rain0rate-act]', 
             '[rain0total-daysum]', 
             '[wind0avgwind-avg60=mph]'
) 