CREATE OR REPLACE FUNCTION fn_get_validator_key()
returns text
SECURITY DEFINER
 as $$
    SELECT value FROM private.keys WHERE key = 'ABSTRACT_API';

    
$$ language sql;

select fn_get_validator_key();



CREATE OR REPLACE FUNCTION fn_mailer_check_key()
RETURNS TEXT
SECURITY DEFINER
 AS $$
 SELECT value FROM private.keys WHERE key = 'MAILER_CHECK_PIXEL_QUOTES_API_KEY';
 $$ 
 LANGUAGE sql;


CREATE OR REPLACE FUNCTION fn_sumbit_quote(name text, email text, phone text,description text, services text)
RETURNS VOID 
SECURITY DEFINER
AS $$

DECLARE
abstract_key text;
result text;

BEGIN
    SELECT value INTO abstract_key FROM private.keys WHERE key = 'ABSTRACT_API';

    SELECT content::jsonb->> 'DELIVERABLITY' INTO result
    FROM http_get('https://emailvalidation.abstractapi.com/v1?api_key=542f3202b0b5453486ba8ab9447c1c1f&email=' || email);
    RAISE NOTICE 'http response: %',result;

    IF result = 'DELIVERABLE' THEN 
        INSERT INTO pixel_quotes(name,email,phone,description,services)
        VALUES (name,email,phone,description,services);
    end if;
    
    
END;$$
LANGUAGE plpgsql;

