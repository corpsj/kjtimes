"use client";

import { Container, Text, Group, Box, Divider } from "@mantine/core";

export function Footer() {
    return (
        <Box component="footer" mt={100} py="xl" bg="gray.0">
            <Container size="xl">
                <Group justify="space-between" align="start">
                    <Box>
                        <Text fw={700} mb="xs">광전타임즈</Text>
                        <Text size="sm" c="dimmed">
                            광주광역시 ... <br />
                            등록번호: ... | 발행인: ...
                        </Text>
                        <Text size="sm" c="dimmed" mt="xs">
                            Copyright © Kwangjeon Times. All rights reserved.
                        </Text>
                    </Box>
                    <Group gap="lg">
                        <Text size="sm" c="dimmed">회사소개</Text>
                        <Text size="sm" c="dimmed">광고안내</Text>
                        <Text size="sm" c="dimmed">개인정보처리방침</Text>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
