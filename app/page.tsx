"use client";

import { Container, Grid, Title, Text, Card, Image, Group, Stack, Badge, Divider, Paper } from "@mantine/core";

export default function Home() {
  return (
    <Container size="xl">
      <Grid gutter={40}>
        {/* LEFT COLUMN: Main News List */}
        <Grid.Col span={{ base: 12, md: 3 }} order={{ base: 2, md: 1 }}>
          <Stack gap="xl">
            <Title order={4} style={{ borderBottom: "2px solid black", paddingBottom: "8px" }}>
              주요뉴스
            </Title>
            {/* ... */}
          </Stack>
        </Grid.Col>

        {/* CENTER COLUMN: Headline */}
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }} style={{ borderLeft: "1px solid #eee", borderRight: "1px solid #eee" }}>
          <Stack gap="xl">
            {/* ... */}
          </Stack>
        </Grid.Col>

        {/* RIGHT COLUMN: Opinion & Ad */}
        <Grid.Col span={{ base: 12, md: 3 }} order={{ base: 3, md: 3 }}>
          <Stack gap="xl">
            <Title order={4} style={{ borderBottom: "2px solid black", paddingBottom: "8px" }}>
              오피니언
            </Title>
            <Paper p="md" bg="gray.0">
              <Text size="xs" c="blue" fw={700} mb="xs">[사설]</Text>
              <Text fw={700} size="md" mb="xs">지역 보도는 지역 언론이 지켜야 한다</Text>
              <Text size="sm" c="dimmed" lineClamp={3}>
                지방 소멸의 시대, 지역 언론의 역할은 그 어느 때보다 중요하다. 중앙 중심의 보도에서 벗어나...
              </Text>
            </Paper>

            <Paper p="md" bg="gray.0">
              <Text size="xs" c="green" fw={700} mb="xs">[칼럼]</Text>
              <Text fw={700} size="md" mb="xs">AI 시대의 교육 혁신</Text>
              <Text size="sm" c="dimmed" lineClamp={3}>
                인공지능이 일상을 파고드는 시대, 우리 교육은 어떻게 변해야 하는가. 암기 위주의 교육에서...
              </Text>
            </Paper>

            <Title order={4} mt="xl" style={{ borderBottom: "2px solid black", paddingBottom: "8px" }}>
              많이 본 뉴스
            </Title>
            <Stack gap="sm">
              {Array(5).fill(0).map((_, i) => (
                <Group key={i} gap="xs">
                  <Badge variant="filled" color="gray" size="sm" radius="xl" circle>{i + 1}</Badge>
                  <Text size="sm" truncate="end" w="80%" style={{ cursor: 'pointer' }}>
                    실시간 인기 뉴스 제목이 들어갑니다 {i + 1}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
