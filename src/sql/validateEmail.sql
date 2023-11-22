CREATE OR REPLACE FUNCTION validate_email(email varchar(255))
RETURNS boolean AS $$
SECURITY DEFINER
DECLARE
  abstract_key varchar(255);
  result BOOLEAN;
BEGIN
  select value into abstract_key from private.keys where name = 'ABSTRACT_API';

select
  "deliverability" into result
from
  http_get(
    'https://emailvalidation.abstractapi.com/v1',
    'api_key=' || abstract_key || '&email=' || email,
    'application/json'
  );

  return result;


END
$$ LANGUAGE plpgsql;

select
  "deliverability" into result
from
  http_get(
    'https://emailvalidation.abstractapi.com/v1?api_key=542f3202b0b5453486ba8ab9447c1c1f&email=emilyaaronlotz@gmail.com',
    'application/json'
  );