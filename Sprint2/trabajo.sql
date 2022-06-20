-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2022 a las 13:36:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorías`
--

CREATE TABLE `categorías` (
  `ID` varchar(50) NOT NULL,
  `Nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorías`
--

INSERT INTO `categorías` (`ID`, `Nombre`) VALUES
('1', 'ONE PIECE'),
('2', 'FÚTBOL'),
('3', 'HISTORIA'),
('4', 'VIDEOJUEGOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `pass`) VALUES
(5, 'JavierS', '$2a$08$Ih2F9bmozkyuLI4Pi.ah0OFfrL2LkMmtMvQ8pFYevb6NsBL.UO/6S'),
(6, 'javier', '$2a$08$XBldeBNeYNvpwT3Vmtrgc.WZmz3/afk6byhjVG2lHmQldO.DQLFLO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `enlace` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `videos`
--

INSERT INTO `videos` (`id`, `titulo`, `enlace`) VALUES
(1, 'Las CENSURAS más ESTÚPIDAS en ONE PIECE', 'https://www.youtube.com/watch?v=QHoxR4Bgt3g&ab_channel=Gaditoo'),
(2, 'One Piece Opening 1 (Español de España) - We Are! ', 'https://www.youtube.com/watch?v=dSUQXSXgvVw&ab_channel=OPGratis'),
(3, 'GRACIAS, MARCELO | Leyenda del Real Madrid', 'https://www.youtube.com/watch?v=-B4orUurUP0&ab_channel=RealMadrid'),
(4, 'Diego Maradona 55 jugadas del Dios del Futbol', 'https://www.youtube.com/watch?v=TQNQXObsnEA&ab_channel=JUGADASM%C3%81GICAS2'),
(5, '¿Cuánto territorio [¡REALMENTE!] descubrieron los ', 'https://www.youtube.com/watch?v=uJ53w44wql8&ab_channel=ElMapadeSebas'),
(6, 'La Rivalidad entre INDIA y PAKISTÁN 🇮🇳 🇵🇰 - El Map', 'https://www.youtube.com/watch?v=_0lGdi8ZAPM&ab_channel=ElMapadeSebas'),
(7, 'El nacimiento del reino nazarí de Granada', 'https://www.youtube.com/watch?v=-qvnPu5Z_As&ab_channel=AcademiaPlay'),
(8, 'Mario Strikers de Nintendo Switch es GENIAL! Pero ', 'https://www.youtube.com/watch?v=Oi3PpAR-8nk&ab_channel=PuertaalS%C3%B3tano'),
(9, 'NINTENDO SWITCH SPORTS ROMPE MIS GANAS DE VIVIR', 'https://www.youtube.com/watch?v=TeAGUySiOHw&ab_channel=Garrus');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorías`
--
ALTER TABLE `categorías`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
