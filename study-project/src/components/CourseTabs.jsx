import React, { useState } from 'react';
import { Tabs, Tab, Box, List, ListItem, ListItemText, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './CourseTabs.css';

const courses = [
  { id: 1, name: 'Курс 1', topics: [
    { title: 'Информационные системы', id: 0 },
    { title: 'Проектный менеджмент в разработке и сопровождении программного обеспечения', id: 1 },
    { title: 'Математические основы алгоритмизации', id: 2 },
    { title: 'Визуальное программирование', id: 3 },
    { title: 'Моделирование физических процессов в приложениях', id: 4 },
    { title: 'Разработка программных модулей', id: 5 },
    { title: 'Поддержка и тестирование программных модулей', id: 6 }
  ]},
  { id: 2, name: 'Курс 2', topics: [
    { title: 'Основы алгоритмизации и программирования', id: 7 },
    { title: 'Основы проектирования баз данных', id: 8 },
    { title: 'Разработка мобильных приложений', id: 9 },
    { title: 'Оператор электронно-вычислительных и вычислительных машин', id: 10 }
  ]},
  { id: 3, name: 'Курс 3', topics: [
    { title: 'Основы применения методов искусственного интеллекта в программировании', id: 11 },
    { title: 'Разработка серверной и интерфейсной частей приложения', id: 12 },
    { title: 'Технология разработки и защиты баз данных', id: 13 },
    { title: 'Инструментальные средства разработки программного обеспечения', id: 14 },
    { title: 'Архитектура аппаратных средств', id: 15 },
    { title: 'Компьютерные сети', id: 16 },
    { title: 'Операционные системы и среды', id: 17 },
    { title: 'Технологии разработки программного обеспечения', id: 18 },
    { title: 'Системное программирование', id: 19 }
  ]},
  { id: 4, name: 'Курс 4', topics: [
    { title: 'Внедрение и поддержка компьютерных систем', id: 20 },
    { title: 'Обеспечение качества функционирования компьютерных систем', id: 21 },
    { title: 'Выполнение работ по верификации и тестированию программных продуктов', id: 22 }
  ]}
];

function CourseTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="course-tabs">
      <Tabs value={value} onChange={handleChange} centered>
        {courses.map((course, index) => (
          <Tab key={index} label={course.name} />
        ))}
      </Tabs>
      {courses.map((course, index) => (
        <TabPanel key={index} value={value} index={index}>
          <List>
            {course.topics.map((topic, topicIndex) => (
              <ListItem key={topicIndex}>
                <ListItemText
                  primary={
                    <Link component={RouterLink} to={`/topic/${topic.id}`} underline="none" color="inherit">
                      <Typography variant="h6">{topic.title}</Typography>
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      ))}
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={`tab-content ${value === index ? 'active' : ''}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default CourseTabs;
