const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
