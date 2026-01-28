"use client";

import { Container, Grid, Title, Text, Card, Image, Group, Stack, Badge, Divider, Paper } from "@mantine/core";

export default function Home() {
  return (
    <Container size="xl">
      <Grid gutter={40}>
        {/* LEFT COLUMN: Main News List */}
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Stack gap="xl">
            <Title order={4} style={{ borderBottom: "2px solid black", paddingBottom: "8px" }}>
              주요뉴스
            </Title>
            {Array(5).fill(0).map((_, i) => (
              <Group key={i} align="flex-start" wrap="nowrap">
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Text fw={700} lineClamp={2} style={{ fontSize: '1.1rem', cursor: 'pointer' }}>
                    광주·전남 지역 경제 활성화 방안... "신재생 에너지가 답이다"
                  </Text>
                  <Text size="xs" c="dimmed">
                    2024.10.24 10:30
                  </Text>
                </Stack>
              </Group>
            ))}
            <Divider variant="dashed" />
            {Array(3).fill(0).map((_, i) => (
              <Text key={i} size="sm" lineClamp={1} style={{ cursor: 'pointer' }}>
                • 전남도, 2025년 국비 확보 총력전... 국회 방문
              </Text>
            ))}
          </Stack>
        </Grid.Col>

        {/* CENTER COLUMN: Headline */}
        <Grid.Col span={{ base: 12, md: 6 }} style={{ borderLeft: "1px solid #eee", borderRight: "1px solid #eee" }}>
          <Stack gap="xl">
            <Card padding={0} radius={0} style={{ border: 'none', boxShadow: 'none' }}>
              <Card.Section>
                <Image
                  src="https://placehold.co/800x500?text=Headline+Image"
                  height={400}
                  alt="Headline"
                />
              </Card.Section>
              <Stack mt="md" gap="xs" align="center">
                <Badge color="blue" size="lg" radius="xs">TOP NEWS</Badge>
                <Title order={2} ta="center" style={{ fontSize: '2.5rem', fontWeight: 900 }}>
                  광주 미래산업, 'AI 중심도시'로 도약
                </Title>
                <Text c="dimmed" lineClamp={3} ta="center" px="xl">
                  광주광역시는 인공지능 산업융합 집적단지 조성사업 2단계 기획안을 확정하고 본격적인 추진에 나선다. 이번 사업은 국가 AI 데이터센터를 중심으로...
                </Text>
              </Stack>
            </Card>

            <Divider my="sm" />

            <Grid>
              <Grid.Col span={6}>
                <Image src="https://placehold.co/400x250?text=Sub+News+1" radius="xs" mb="sm" />
                <Title order={5} mb="xs">전남 관광객 1억명 시대 열린다</Title>
                <Text size="sm" c="dimmed" lineClamp={2}>전라남도는 '2025 전남 방문의 해'를 맞아 다양한 관광 상품을 개발하고...</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Image src="https://placehold.co/400x250?text=Sub+News+2" radius="xs" mb="sm" />
                <Title order={5} mb="xs">기아 타이거즈, V12 달성 눈앞</Title>
                <Text size="sm" c="dimmed" lineClamp={2}>프로야구 기아 타이거즈가 한국시리즈 우승까지 단 1승만을 남겨두고 있다. 팬들의 기대가...</Text>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>

        {/* RIGHT COLUMN: Opinion & Ad */}
        <Grid.Col span={{ base: 12, md: 3 }}>
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
