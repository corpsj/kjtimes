"use client";

import { Container, Group, Text, Title, Anchor, Box, Divider, Image } from "@mantine/core";
import Link from "next/link";

const LINKS = [
    { label: "홈", href: "/" },
    { label: "정치", href: "/politics" },
    { label: "경제", href: "/economy" },
    { label: "사회", href: "/society" },
    { label: "생활/문화", href: "/culture" },
    { label: "오피니언", href: "/opinion" },
    { label: "스포츠", href: "/sports" },
];

export function Header() {
    const today = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    return (
        <Box component="header" mb="xl">
            {/* Top Utility Bar */}
            <Container size="xl" py="xs">
                <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                        {today}
                    </Text>
                    <Group gap="xs">
                        <Anchor component={Link} href="/login" size="xs" c="dimmed" underline="never">
                            로그인
                        </Anchor>
                        <Divider orientation="vertical" h={10} />
                        <Anchor component={Link} href="/subscribe" size="xs" c="dimmed" underline="never">
                            구독하기
                        </Anchor>
                    </Group>
                </Group>
            </Container>

            <Divider color="gray.2" />

            {/* Logo Section */}
            <Container size="xl" py="sm">
                <Group justify="center">
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Image
                            src="/brand/logo-optimized.png"
                            style={{ height: '140px', width: 'auto', display: 'block' }}
                            alt="광전타임즈 로고"
                        />
                    </Link>
                </Group>
            </Container>

            {/* Navigation Bar */}
            <Box style={{ borderTop: "1px solid var(--mantine-color-gray-3)", borderBottom: "1px solid var(--mantine-color-gray-3)" }}>
                <Container size="xl">
                    <Group justify="center" gap="xl" h={50}>
                        {LINKS.map((link) => (
                            <Anchor
                                key={link.label}
                                component={Link}
                                href={link.href}
                                c="dark.9"
                                fw={700}
                                underline="never"
                                style={{ fontSize: '1.1rem' }}
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>
                </Container>
            </Box>
        </Box>
    );
}
