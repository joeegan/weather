-- Example MySQL Database Structure and Query for MeteoBridge Push Services
-- version 1.1 (Feb 13, 2015)
-- http://www.stevejenkins.com/

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `meteobridge`
--

-- --------------------------------------------------------

--
-- Table structure for table `marshfield`
--

CREATE TABLE IF NOT EXISTS `marshfield` (
  `id` int(11) NOT NULL,
  `date_time` datetime NOT NULL COMMENT 'Date and Time of Readings',
  `temp_act` decimal(4,1) NOT NULL COMMENT 'Current Outdoor Temperature',
  `wind_chill_act` decimal(4,1) NOT NULL COMMENT 'Current Wind Chill',
  `dew_act` decimal(4,1) NOT NULL COMMENT 'Current Dew Point',
  `hum_act` int(11) NOT NULL COMMENT 'Current Outdoor Humidity',
  `wind_speed_act` decimal(4,1) NOT NULL COMMENT 'Current Wind Speed',
  `wind_dir_act` int(11) NOT NULL COMMENT 'Current Wind Direction (Degrees)',
  `sol_rad_act` decimal(5,2) NOT NULL COMMENT 'Current solar radiation in W/m^2',
  `rain_rate_act` decimal(5,2) NOT NULL COMMENT 'Current Rain Rate',
  `rain_total_daysum` decimal(4,2) NOT NULL COMMENT 'Total Rain for Today',
  `wind_speed_avg_60` decimal(4,1) NOT NULL COMMENT 'Current Average Wind Speed'
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marshfield`
-- To collect data from MeteoBridge, use thefollowing commented line as the Query in MeteoBridge's Push Services Tab (without the quotes):
-- INSERT INTO `meteobridge`.`marshfield` (`ID`, `DateTime`, `TempOutCur`, `HumOutCur`, `PressCur`, `DewCur`, `HeatIdxCur`, `WindChillCur`, `TempInCur`, `HumInCur`, `WindSpeedCur`, `WindAvgSpeedCur`, `WindDirCur`, `WindDirCurEng`, `WindGust10`, `WindDirAvg10`, `WindDirAvg10Eng`, `RainRateCur`, `RainDay`, `RainYest`, `RainMonth`, `RainYear`) VALUES (NULL, '[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]', '[th0temp-act=F]', '[th0hum-act]', '[thb0seapress-act=inHg.2]', '[th0dew-act=F]', '[th0heatindex-act=F]', '[wind0chill-act=F]', '[thb0temp-act=F]', '[thb0hum-act]', '[wind0wind-act=mph]', '[wind0avgwind-act=mph]', '[wind0dir-act]', '[wind0dir-act=endir]', '[wind0wind-max10=mph]', '[wind0dir-avg10]', '[wind0dir-avg10=endir]', '[rain0rate-act=in.2]', '[rain0total-daysum=in.2]', '[rain0total-ydaysum=in.2]', '[rain0total-monthsum=in.2]', '[rain0total-yearsum=in.2]')
-- See http://www.meteobridge.com/wiki/index.php/Templates for more info and further customization options, and delete the following sample record from your database after confirming import:

-- INSERT INTO `marshfield` (`ID`, `DateTime`, `TempOutCur`, `HumOutCur`, `PressCur`, `DewCur`, `HeatIdxCur`, `WindChillCur`, `TempInCur`, `HumInCur`, `WindSpeedCur`, `WindAvgSpeedCur`, `WindDirCur`, `WindDirCurEng`, `WindGust10`, `WindDirAvg10`, `WindDirAvg10Eng`, `RainRateCur`, `RainDay`, `RainYest`, `RainMonth`, `RainYear`) VALUES
-- (1, '2015-02-12 22:00:00', '54.7', 78, '30.24', '48.0', '54.7', '54.7', '79.0', 40, '0.9', '0.0', 134, 'SE', '2.0', 142, 'SE', '0.00', '0.03', '0.01', '4.54', '10.12');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `marshfield`
--
ALTER TABLE `marshfield`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marshfield`
--
ALTER TABLE `marshfield`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;