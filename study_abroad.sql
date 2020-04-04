-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2020 at 01:31 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `study_abroad`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `unique_id` int(11) NOT NULL,
  `title` varchar(2048) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`unique_id`, `title`, `description`, `url`) VALUES
(1, 'Study in Canada as an international student', 'Official site.', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html'),
(2, 'The cost of studying in Canada', 'THE COST OF STUDYING IN CANADA. Compared to many countries, studying in Canada is very affordable. You will likely need between C$20,000 and C$30,000 annually to cover tuition. This range is an average only and will vary according to the institution and program in which you are enrolled.', 'https://www.universitystudy.ca/plan-for-university/what-does-it-cost-to-study-in-canada/'),
(3, 'International student life in Canada', 'International student life in Canada. The 500,000 international students who come to Canada every year for college and university studies are just the tip of the iceberg. ... Canada is a great place to grow and thrive as a student. Discover what Canadians do for fun and what other international students think about Canada.', 'https://www.educanada.ca/live-work-vivre-travailler/student-life-vie-etudiant.aspx?lang=eng'),
(4, '6 tips to make the most of student life in Canada', 'Starting a new chapter of your life in a foreign country will be one of the most exciting experiences of your life. Everything – from your academics to the food, from culture to the people, will become a learning experience.', 'https://www.braingainmag.com/6-tips-to-make-the-most-of-student-life-in-canada.htm');

-- --------------------------------------------------------

--
-- Table structure for table `university_info`
--

CREATE TABLE `university_info` (
  `unique_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `rank` int(255) NOT NULL,
  `fees` varchar(50) NOT NULL,
  `average_temp` int(200) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `university_info`
--

INSERT INTO `university_info` (`unique_id`, `name`, `province`, `rank`, `fees`, `average_temp`, `url`) VALUES
(1, 'University Of Toronto', 'Toronto Ontario', 19, '35890 55680', 0, 'https://www.utoronto.ca/'),
(2, 'University Of British Columbia', 'Vancouver British-Columbia', 28, '28000', 2, 'https://www.ubc.ca/'),
(3, 'University Of McGill', 'Montreal Quebec', 56, '35890 58680', 4, 'https://www.mcgill.ca/'),
(4, 'University Of Alberta', 'Edmonton Alberta', 65, '18440 48747', 14, 'https://www.ualberta.ca/index.html'),
(5, 'University Of Waterloo', 'Waterloo Ontario', 85, '29000 35000', 3, 'https://uwaterloo.ca/'),
(6, 'University Of Calgary', 'Calgary Alberta', 96, '18340', -3, 'http://www.ucalgary.ca/'),
(7, 'McMaster University', 'Hamilton Ontario', 131, '27000 31000', 9, 'https://www.mcmaster.com/'),
(8, 'Simon Fraser University', 'Burnaby British-Columbia', 138, '24800 28250', 9, 'https://www.sfu.ca/'),
(9, 'Université de Montréal', 'Sherbrooke Quebec', 160, '17500 19500', 7, 'https://www.usherbrooke.ca/'),
(10, 'Western University', 'London Ontario', 172, '27719 31000', 8, 'https://www.uwo.ca/'),
(11, 'University Of Ottawa', 'Ottawa Ontario', 189, '36161', 7, 'https://www.uottawa.ca/en'),
(12, 'Queen\'s University', 'Kingston Ontario', 196, '39000 46200', 8, 'https://www.queensu.ca/'),
(13, 'University Of Victoria', 'Victoria British-Columbia', 198, '19536 24926', 11, 'https://www.uvic.ca/'),
(14, 'York University', 'Toronto Ontario', 218, '28633', 8, 'https://www.yorku.ca/index.html'),
(15, 'Dalhousie University', 'Halifax Nova-Scotia', 227, '17661 19134', 7, 'https://www.dal.ca/U'),
(16, 'University Of Manitoba', 'Winnipeg Manitoba', 268, '15000 17375', 5, 'http://umanitoba.ca/'),
(17, 'University Of Saskatchewan', 'Saskatoon Saskatchewan', 296, '17615 18038', 3, 'https://www.usask.ca/'),
(18, 'University Of Guelph', 'Guelph Ontario', 303, '9730 24300', 7, 'https://www.uoguelph.ca/'),
(19, 'Carleton University', 'Ottawa Ontario', 340, '25500 33750', 7, 'https://carleton.ca/'),
(20, 'Concordia University', 'Montreal Quebec', 385, '17530 19581', 7, 'https://www.concordia.ca/'),
(21, 'Memorial University', 'Newfoundland-and-Labrador', 435, '11460', 5, 'https://www.mun.ca/'),
(22, 'Ryerson University', 'Toronto Ontario', 470, '25680 26000', 10, 'https://www.ryerson.ca/'),
(23, 'University de Sherbrooke', 'Sherbrooke Quebec', 536, '17421 19459', 5, 'https://www.usherbrooke.ca/'),
(24, 'University of New Brunswick', 'Fredericton New-Brunswick', 615, '16500', 7, 'https://www.unb.ca/'),
(25, 'University Of Windsor', 'Windsor Ontario', 655, '24410 24680', 10, 'http://www.uwindsor.ca/'),
(26, 'University Of Regina', 'Regina Saskatchewan', 744, '20000 21000', 3, 'https://www.uregina.ca/'),
(27, 'Brock University', 'St.Catharines Ontario', 772, '26558', 9, 'https://brocku.ca/'),
(30, 'New University', 'City Province', 111, '50000 55000', 0, 'https://google.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`unique_id`);

--
-- Indexes for table `university_info`
--
ALTER TABLE `university_info`
  ADD PRIMARY KEY (`unique_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `unique_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `university_info`
--
ALTER TABLE `university_info`
  MODIFY `unique_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
