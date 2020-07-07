export const arrivalStatus = [
  {
    statusCode: 'SCH',
    status: 'Flight Scheduled',
    description:
      'Indicates when a Flight (created by the aircraft operator) is scheduled to take place.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'AIR',
    status: 'Airborne',
    description:
      'Airborne is a flight state at which the flight is airborne. The flight is en route.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'EXP',
    status: 'Expected landing',
    description:
      'Is a flight state which is used when the Estimated Landing Time (ELTD – Expected Landing Time) for an inbound flight to Amsterdam Airport Schiphol has 10 minutes or more deviation from the scheduled time.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'FIR',
    status: 'Flight in Dutch airspace',
    description:
      'FIR is an abbreviation for ‘Flight Information Region’. In the context of CISS this is the Dutch Airspace.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'LND',
    status: 'Landed',
    description:
      'When an aircraft has landed on the runway and is taxiing to the gate.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'FIB',
    status: 'First baggage on belt',
    description:
      'Is a flight state which indicates that the First Bagage of an arriving flight will be on the(luggage) belt very soon.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'ARR',
    status: 'Baggage handled',
    description:
      'Is a flight state at which the luggage of an arriving flight has been completely handled and is off the luggage belt.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'DIV',
    status: 'Diverted',
    description:
      'When the flight is diverted from Amsterdam Airport Schiphol. For those flights the flight state will be changed to DIV and the flight will not arrive at EHAM (Amsterdam Airport Schiphol).',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'CNX',
    status: 'Cancelled',
    description: 'A scheduled flight that will not be operated.',
    backgroundColor: '#ff0800',
  },
  {
    statusCode: 'TOM',
    status: 'Tomorrow',
    description:
      'When the date of an expected departure exceeds the initial date.',
    backgroundColor: '#ff0800',
  },
];
