import React from 'react'
import { useState, useEffect } from "react";
import { useCounter } from "@mantine/hooks";
import {
  Group,
  Button,
  Flex,
  Autocomplete,
  Container,
  Title,
  rem,
  Input,
  Alert,
  Avatar,
  Card,
  Text,
} from "@mantine/core";

const HomePage = () => {
  
  
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('id-ID', options));
  }, []);
  return (
    <div>
<Card shadow="sm" padding="lg" radius="md" mb="0.75rem" withBorder>
          <Card.Section className="text-background">
            <Flex>
              <Text fw={500} size="lg" mr="0.5rem">
                Hai,
              </Text>
              <Text fw={700} size="lg" mb="sm">Roger Dias</Text>
            </Flex>
            <Group justify="space-between" mb="0.25rem">
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                  1000
                </Text>
                <Text size="md">Koin</Text>
              </Flex>
              <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                =
              </Text>
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                  100.000
                </Text>
                <Text size="md">IDR</Text>
              </Flex>
            </Group>
          </Card.Section>
          <Card.Section className="text-card" color="#000">
            <Text size="md" px="1rem" py="1rem" fw={400}>
              {currentDate}
            </Text>
          </Card.Section>
        </Card>
    </div>
  )
}

export default HomePage