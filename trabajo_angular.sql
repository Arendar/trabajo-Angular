-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2022 a las 20:00:03
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
-- Base de datos: `trabajo angular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorías`
--

CREATE TABLE `categorías` (
  `ID` int(11) NOT NULL,
  `Nombre` text COLLATE utf16_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `categorías`
--

INSERT INTO `categorías` (`ID`, `Nombre`) VALUES
(1, 'One Piece'),
(2, 'Fútbol'),
(3, 'Historia'),
(4, 'Videojuegos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `user` text COLLATE utf16_spanish_ci NOT NULL COMMENT 'Nombre usuario',
  `pass` text COLLATE utf16_spanish_ci NOT NULL COMMENT 'Contraseña usuario',
  `access` int(11) NOT NULL COMMENT 'Si tiene acceso a la barra: 1\r\nNo tiene acceso: 2'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `user`, `pass`, `access`) VALUES
(1, 'admin', 'admin', 1),
(2, 'pepelu', 'abracadabra', 2),
(3, 'tonio', 'patata-1234', 2),
(4, 'Iamari', 'veteasaber', 2),
(5, 'donjI', 'G7x[-%az/', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vídeos`
--

CREATE TABLE `vídeos` (
  `ID` int(11) NOT NULL,
  `Titulo` text COLLATE utf16_spanish_ci NOT NULL,
  `Enlace` text COLLATE utf16_spanish_ci NOT NULL,
  `ID Categoría` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `vídeos`
--

INSERT INTO `vídeos` (`ID`, `Titulo`, `Enlace`, `ID Categoría`) VALUES
(1, 'Las CENSURAS más ESTÚPIDAS en ONE PIECE (No las conoces).', 'https://www.youtube.com/watch?v=QHoxR4Bgt3g&ab_channel=Gaditoo', 1),
(2, 'One Piece Opening 1 (Español de España) - We Are! HD', 'https://www.youtube.com/watch?v=dSUQXSXgvVw&ab_channel=OPGratis', 1),
(3, 'GRACIAS, MARCELO | Leyenda del Real Madrid', 'https://www.youtube.com/watch?v=-B4orUurUP0&ab_channel=RealMadrid', 2),
(4, 'Diego Maradona 55 jugadas del Dios del Futbol', 'https://www.youtube.com/watch?v=TQNQXObsnEA&ab_channel=JUGADASM%C3%81GICAS2', 2),
(5, '¿Cuánto territorio [¡REALMENTE!] descubrieron los EUROPEOS? 🇵🇹🇪🇸🇦🇹🇳🇴🏴󠁧󠁢󠁥󠁮󠁧󠁿 - El Mapa de Sebas', 'https://www.youtube.com/watch?v=uJ53w44wql8&ab_channel=ElMapadeSebas', 3),
(6, 'La Rivalidad entre INDIA y PAKISTÁN 🇮🇳 🇵🇰 - El Mapa de Sebas', 'https://www.youtube.com/watch?v=_0lGdi8ZAPM&ab_channel=ElMapadeSebas', 3),
(7, 'El nacimiento del reino nazarí de Granada', 'https://www.youtube.com/watch?v=-qvnPu5Z_As&ab_channel=AcademiaPlay', 3),
(8, 'Mario Strikers de Nintendo Switch es GENIAL! Pero tiene GRANDES PROBLEMAS!', 'https://www.youtube.com/watch?v=Oi3PpAR-8nk&ab_channel=PuertaalS%C3%B3tano', 4),
(9, 'NINTENDO SWITCH SPORTS ROMPE MIS GANAS DE VIVIR', 'https://www.youtube.com/watch?v=TeAGUySiOHw&ab_channel=Garrus', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorías`
--
ALTER TABLE `categorías`
  ADD PRIMARY KEY (`ID`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `vídeos`
--
ALTER TABLE `vídeos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorías`
--
ALTER TABLE `categorías`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vídeos`
--
ALTER TABLE `vídeos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
