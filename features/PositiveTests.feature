Feature: PositiveTests.feature

  @smoke
  Scenario Outline: Send post to /[endpoints] single values
    Given I set headers to
      | name         | value            |
      | Content-Type | application/json |
      | Accept       | application/json |
    And I set body to <json>
    When I POST to [value to field]
    Then response code should be 200
    Then response header Content-Type should be application/json
    Then response body should be valid json
    Then response body should be valid according to schema file ./features/fixtures/[JSON OBJECT].schema
    Examples:
      | json                                         |
      | {"[FORM FIELD]":"[VALUE]"} |

