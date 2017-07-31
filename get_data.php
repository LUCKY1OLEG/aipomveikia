<?php
	$url = 'data.json';
	$data = file_get_contents($url);

	echo $data;
?>