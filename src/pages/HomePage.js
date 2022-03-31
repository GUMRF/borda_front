import React from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';

export const HomePage = () => (
    <>
    <body id='home'>
    <div class="HomeText"><strong>Данный проект - это информационный портал посвещеный IT с углублением в информационную безопасность.</strong></div>
    <div class="HomeText"><strong>Ниже представлена таблица с уже имеющимеся раздела и разделами, которые буду добавлены в будущем.</strong></div>
    <Container> 
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Название раздела</th>
                <th>Статус</th>
                <th>Дата добавления</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Компьютерная безопасность</td>
                <td>Завершен</td>
                <td>12.05.2021</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Информационная безопасность в наше время</td>
                <td>Завершен</td>
                <td>25.05.2021</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Все о вирусах и вредоносных ПО</td>
                <td>Завершен</td>
                <td>03.06.2021</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Кибермошенничество</td>
                <td>В процессе добавления <Spinner animation="border" size="sm" /></td>
                <td>-------</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Кибернетика и искусственный интеллект</td>
                <td>В процессе добавления <Spinner animation="border" size="sm" /></td>
                <td>-------</td>
            </tr>
        </tbody>
    </Table>
    </Container>
    </body>
    </>
)