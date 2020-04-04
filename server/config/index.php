<?php
    require_once __DIR__ . '/config.php';
    class API {
        function preSelect($table) {
            $db = new Connect;
            $data = $db->prepare('SELECT * FROM ' . $table);
            return $data;
        }

        function Select() {
            $universities = array();
            $data = $this->preSelect('university_info');
            $data->execute();
            while ($Output = $data->fetch(PDO::FETCH_ASSOC)) {
                array_push($universities, array(
                    'name' => $Output['name'],
                    'province' => $Output['province'],
                    'rank' => $Output['rank'],
                    'fees' => $Output['fees'],
                    'average_temp' => $Output['average_temp'],
                    'url' => $Output['url']
                ));
            }
            return json_encode(array(
                'data' => $universities
            ));
        }

        function SelectBlogs() {
            $data = $this->preSelect('blogs');
            $data->execute();
            $blogs = array();
            while ($Output = $data->fetch(PDO::FETCH_ASSOC)) {
                array_push($blogs, array(
                    'title' => $Output['title'],
                    'description' => $Output['description'],
                    'url' => $Output['url']
                ));
            }
            return json_encode(array(
                'data' => $blogs
            ));
        }

        function Insert($uniname, $province, $rank, $fees, $average_temp, $url) {
            $db = new Connect;
            $sql = 'INSERT INTO university_info (name, province, rank, fees, average_temp, url) ';
            $sql = $sql . 'VALUES (:name, :province, :rank, :fees, :temp, :url)';
            $st = $db->prepare($sql);
            $st->execute([
                'name' => $uniname,
                'province' => $province,
                'rank' => $rank,
                'fees' => $fees,
                'temp' => $average_temp,
                'url' => $url
            ]);
        }
    }
?>